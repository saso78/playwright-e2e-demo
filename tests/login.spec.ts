import { test, expect } from '@playwright/test';

test ('Open Page',async ({ page }) =>{
    await page.goto('https://automationexercise.com/')
    await expect(page).toHaveTitle('Automation Exercise')
})