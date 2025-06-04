import { Page, expect } from '@playwright/test';

export class HomePage{

    constructor(private page: Page) {}

    async goto(){
        await this.page.goto('https://automationexercise.com/');
        await expect( this.page.locator('#header')).toContainText('Home');
    }

    async signUpLink(){
        await this.page.getByRole('link', { name: ' Signup / Login' }).click();
        await expect(this.page.locator('#form')).toContainText('New User Signup!');
    }
}