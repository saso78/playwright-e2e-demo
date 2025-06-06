import { test, type Page } from "@playwright/test";
import { generateUserData } from "../utils/helpers";
import { HomePage } from "../pages/home.page";
import { SignupPage } from "../pages/signup.page";

test("Test Case 1: Register User", async ({ page }) => {
  const user = generateUserData();
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);

  await homePage.goto();
  await homePage.signUpLink();
  await signupPage.filUserForm(user);
  await signupPage.createAcc();
  await signupPage.deleteAcc();
});

test("Test Case 2: Login User with correct email and password", async ({
  page,
}) => {
  const user = generateUserData();
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);

  await homePage.goto();
  await homePage.signUpLink();
  await signupPage.filUserForm(user);
  await signupPage.createAcc();

  await signupPage.logout();
  await signupPage.login(user);
});
