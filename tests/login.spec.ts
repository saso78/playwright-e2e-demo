import { test } from '@playwright/test';
import {generateUserData} from '../utils/helpers'; 
import { HomePage } from '../pages/home.page';
import { SignupPage } from '../pages/signup.page';

test('test', async ({ page }) => {

    const user = generateUserData();
    const homePage = new HomePage(page);
    const signupPage =new SignupPage (page);
    
  await homePage.goto();
  await homePage.signUpLink();
  await signupPage.filUserForm(user);
  await signupPage.createAcc();
  await signupPage.deleteAcc();
  
});
