import { Selector, t } from 'testcafe';
import { ClientFunction } from 'testcafe';

import homepage from '../pages/HomePage';



const URL = 'https://www.itecor-app.ch/';
const getURL = ClientFunction(() => window.location.href);


fixture`Geneva Fixture`
    .page(URL);
 
test('Assert home page', async t => {
    await t
    .expect(getURL()).eql(URL)
    .takeScreenshot()
    .expect(homepage.subtitleHeader.exists).ok()
});

 test('verifier place diponible',async t => {
     await t
     .maximizeWindow()          
     .typeText(homepage.UserName,"User1")
     .typeText(homepage.password,"Password1234")
     .click(homepage.submitLink)
     await t
     .wait(1000)
     await t.click(homepage.genevatLink)
     .expect(getURL()).contains('geneva')
     let text10;
     text10 = Selector('p.office-summary ')
     await t
     .expect(text10.innerText).eql("The office has still 10 free seats.")
     let i 
     let j = 9
     for(i = 4; i < 8; i++) {
         await t
         .click(`div.office-walls div.seat.consultant-seat.free:nth-child(${i})`)
         const opacity = await Selector('div[class="seat consultant-seat occupied"]').getStyleProperty('background-color');
         await t.expect(opacity).eql('rgb(255, 0, 0)', {timeout: 5000})
         let text = Selector('p.office-summary')
         await t 
         .scrollIntoView(text)
         .expect(text.innerText).eql(`The office has still ${j} free seats.`)
         .takeScreenshot()
         j--
     }
     let k 
     let l = 5
     for(k =  1; k <= 2; k++) {
        await t
        .click(`.office-managers div.seat:nth-child(${k})`)
        const opacity = await Selector('div[class="seat consultant-seat occupied"]').getStyleProperty('background-color');
        await t.expect(opacity).eql('rgb(255, 0, 0)', {timeout: 5000})
        let text = Selector('p.office-summary')
        await t 
        .scrollIntoView(text)
        .expect(text.innerText).eql(`The office has still ${l} free seats.`)
        .takeScreenshot()
        l--
    }
    let m
    let n = 3
     for(m = 1; m <= 2; m++) {
        await t
        .click(`div.office-consultants div.seat:nth-child(${m})`)
        const opacity = await Selector('div[class="seat consultant-seat occupied"]').getStyleProperty('background-color');
        await t.expect(opacity).eql('rgb(255, 0, 0)', {timeout: 5000})
        let text = Selector('p.office-summary')
        await t 
        .scrollIntoView(text)
        .expect(text.innerText).eql(`The office has still ${n} free seats.`)
        .takeScreenshot()
        n--
    }
    let o
    let p = 1
     for(o = 1; o <= 2; o++) {
        await t
        .click(`div.office-consultants div.row:nth-child(3) div.seat:nth-child(${o})`)
        const opacity = await Selector('div[class="seat consultant-seat occupied"]').getStyleProperty('background-color');
        await t.expect(opacity).eql('rgb(255, 0, 0)', {timeout: 5000})
        let text = Selector('p.office-summary')
        await t 
        .scrollIntoView(text)
        .expect(text.innerText).eql(`The office has still ${p} free seats.`)
        .takeScreenshot()
        p--
    }
     await t
     .wait(5000)
    });
   