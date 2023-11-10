import { Selector } from "testcafe";

fixture`Check style selectors`
  .page`http://localhost:5173`;

test("Check if style is reactive for keyboard", async (t) => {
  await t
    .wait(1000)
    // Click on the button of letter "A"
    .click(Selector("._btn_1rn82_1"))
    .wait(1000)   
    .takeScreenshot()
    .wait(1000)
    // Check if the button is active 
    if (await Selector("button#btn").hasClass("_active_1rn82_13")) {
      await t
      // Check if the background color is blue
      .expect(Selector("._active_1rn82_13").getStyleProperty("background-color")).eql("rgb(0, 170, 255)")
      .takeScreenshot()
      .wait(1000)
    }
    // Check if the button is inactive
    else if (await Selector("button#btn").hasClass("_inactive_1rn82_17")) {
      await t
      // Check if the background opacity is 0.3
      .expect(Selector("._inactive_1rn82_17").getStyleProperty("opacity")).eql("0.3")
      .takeScreenshot()
      .wait(1000) 
    } 
});

test("check if the letter is appear in the text area or hangman part is appear", async (t) => {
  await t
    .wait(1000)
    // Click on the button of letter "A"
    .click(Selector("._btn_1rn82_1"))
    .wait(1000)
    .takeScreenshot()
  // Check if the letter is appear in the text area
  if (await Selector("button#btn").hasClass("_active_1rn82_13")) {
    await t
      // Check if at least one #textOutput span has the text 'A'
      .expect(Selector("#textOutput span").withText('A').exists).ok()
      .takeScreenshot()
      .wait(1000)
  }
  // Check if the hangman part is appear
  else if (await Selector("button#btn").hasClass("_inactive_1rn82_17")) {
    await t
      // Check if the hangman part is appear
      .expect(Selector("#head").exists).ok()
      .takeScreenshot()
      .wait(1000)
  }
});

// testcafe chrome  src/twotests.js --app "npm run dev" 




