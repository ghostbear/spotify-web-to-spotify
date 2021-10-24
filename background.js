/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const schema = "spotify://"
function callback(details) {
	return {
		redirectUrl: schema + details.url.replace(/^https?:\/\/w{0,3}\.?open\.spotify.com\//, "")
	}
}

const filter = {
	urls: [
		"*://open.spotify.com/*",
		"*://www.open.spotify.com/*",
	],
	types: ["main_frame"]
}

const extra = ["blocking"]

chrome.webRequest.onBeforeRequest.addListener(callback, filter, extra)
