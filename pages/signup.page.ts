import {Page, expect } from "@playwright/test";

export class SignupPage{
    
    constructor(private page: Page) {}
    async filUserForm(user:{
        name: string,
        email: string,
        password:string,
        firstname: string,
        lastname: string,
        company: string,
        address1: string,
        address2: string,
        country: string,
        zipcode: string,
        state: string,
        city: string,
        mobile_number:string
    }){

        await this.page.getByRole('textbox', { name: 'Name' }).click();
        await this.page.getByRole('textbox', { name: 'Name' }).fill(user.name);
        await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
        await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(user.email);
        await this.page.getByRole('button', { name: 'Signup' }).click();
        await this.page.getByRole('radio', { name: 'Mr.' }).check();
        await this.page.getByRole('textbox', { name: 'Password *' }).click();
        await this.page.getByRole('textbox', { name: 'Password *' }).fill(user.password);
        await this.page.getByText('Date of Birth').click();
        await this.page.locator('#days').selectOption('4');
        await this.page.locator('#months').selectOption('5');
        await this.page.locator('#years').selectOption('2017');
        await this.page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
        await this.page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
        await this.page.getByText('Address Information').click();
        await this.page.getByRole('textbox', { name: 'First name *' }).click();
        await this.page.getByRole('textbox', { name: 'First name *' }).fill(user.name);
        await this.page.getByRole('textbox', { name: 'Last name *' }).click();
        await this.page.getByRole('textbox', { name: 'Last name *' }).fill(user.lastname);
        await this.page.getByRole('textbox', { name: 'Company', exact: true }).click();
        await this.page.getByRole('textbox', { name: 'Company', exact: true }).fill(user.company);
        await this.page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
        await this.page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill(user.address1);
        await this.page.getByRole('textbox', { name: 'Address 2' }).click();
        await this.page.getByRole('textbox', { name: 'Address 2' }).fill(user.address2);
        await this.page.getByLabel('Country *').selectOption('United States');
        await this.page.getByRole('textbox', { name: 'State *' }).click();
        await this.page.getByRole('textbox', { name: 'State *' }).fill(user.state);
        await this.page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
        await this.page.getByRole('textbox', { name: 'City * Zipcode *' }).fill(user.city);
        await this.page.locator('#zipcode').click();
        await this.page.locator('#zipcode').fill(user.zipcode);
        await this.page.getByRole('textbox', { name: 'Mobile Number *' }).click();
        await this.page.getByRole('textbox', { name: 'Mobile Number *' }).fill(user.mobile_number);
    }
    async createAcc(){
            await this.page.getByRole('button', { name: 'Create Account' }).click();
            await expect(this.page.locator('b')).toContainText('Account Created!');
            await this.page.getByRole('link', { name: 'Continue' }).click();
    }

    async deleteAcc(){
        await this.page.getByRole('link', { name: ' Delete Account' }).click();
        await expect(this.page.locator('b')).toContainText('Account Deleted!');
        await this.page.getByRole('link', { name: 'Continue' }).click();
    }

    async logout(){
        await this.page.getByRole('link', { name: 'Logout' }).click(); 

    }

    async login(user){

        await this.page.getByRole('link', { name: ' Signup / Login' }).click();
        await expect(this.page.locator('#form')).toContainText('Login to your account');
        await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
        await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(user.email);
        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill(user.password);
        await this.page.getByRole('button', { name: 'Login' }).click();
        await expect(this.page.getByText(`Logged in as ${user.name}`)).toBeVisible();
    }
     async Invalidlogin(){

        await this.page.getByRole('link', { name: ' Signup / Login' }).click();
        await expect(this.page.locator('#form')).toContainText('Login to your account');
        await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
        await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill("wrongemail@email.com");
        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill("user.password");
        await this.page.getByRole('button', { name: 'Login' }).click();
        await expect(this.page.getByText(`Your email or password is incorrect!`)).toBeVisible();
    }
  
     
}