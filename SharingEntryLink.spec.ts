/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from 'vitest'
import SharingEntryLink from './SharingEntryLink.vue'

const showSuccess = vi.hoisted(() => vi.fn())
vi.mock('@nextcloud/dialogs', () => ({
	showError: vi.fn(),
	showSuccess,
}))

type SharingEntryLinkOptions = {
	computed: {
		readableShareLink: () => string
	}
	methods: {
		copyLink: () => Promise<void>
		copyReadableLink: () => Promise<void>
	}
}

const component = SharingEntryLink as unknown as SharingEntryLinkOptions
const encodedLink = 'https://cloud.example.invalid/s/%D1%82%D0%B5%D1%81%D1%82'
const readableLink = 'https://cloud.example.invalid/s/тест'

describe('SharingEntryLink clipboard actions', () => {
	const writeText = vi.fn().mockResolvedValue(undefined)
	const focus = vi.fn()

	beforeEach(() => {
		vi.clearAllMocks()
		Object.defineProperty(navigator, 'clipboard', {
			configurable: true,
			value: { writeText },
		})
	})

	it('keeps the standard copy action canonical and encoded', async () => {
		const context = {
			shareLink: encodedLink,
			copySuccess: false,
			$refs: { copyButton: { $el: { focus } } },
		}

		await component.methods.copyLink.call(context)

		expect(writeText).toHaveBeenCalledWith(encodedLink)
	})

	it('copies a readable Unicode URL only from the additional action', async () => {
		const context = {
			shareLink: encodedLink,
			readableShareLink: component.computed.readableShareLink.call({ shareLink: encodedLink }),
		}

		await component.methods.copyReadableLink.call(context)

		expect(context.readableShareLink).toBe(readableLink)
		expect(writeText).toHaveBeenCalledWith(readableLink)
		expect(showSuccess).toHaveBeenCalledWith('Readable link copied')
	})
})
