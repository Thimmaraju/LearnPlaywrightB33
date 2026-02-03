import { expect } from "@playwright/test"

exports.buzzpage = class buzzpage {

    constructor(page) {

        this.page = page
        this.buzzMenu = page.locator('//a[@href="#/buzz/viewBuzzFeed"]')
        this.postButton = page.locator('//button[contains(text(), "Share")]')
        this.shareButton = page.locator('//button[@type="submit" and contains(., "Share")]')
        this.postTextarea = page.locator('//textarea[@placeholder="Share your thoughts here..."]')
        this.postSuccess = page.locator('//div[contains(@class, "message") and contains(text(), "Post successfully")]')
        this.closeButton = page.locator('//button[contains(text(), "Cancel")]')

    }

    async navigateToBuzz() {

        await this.buzzMenu.click()
        await this.page.waitForTimeout(1000)

    }

    async clickShareButton() {

        await this.postButton.click()

    }

    async enterBuzzPost(postText) {

        await this.postTextarea.fill(postText)

    }

    async submitBuzzPost() {

        await this.shareButton.click()
        await this.page.waitForTimeout(2000)

    }

    async verifyPostSuccess() {

        await expect(this.postSuccess).toBeVisible()

    }

    async addBuzzPost(postText) {

        await this.clickShareButton()
        await this.enterBuzzPost(postText)
        await this.submitBuzzPost()
        await this.verifyPostSuccess()

    }

}
