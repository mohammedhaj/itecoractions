import { Selector,t } from "testcafe";
class HomePage{
    constructor(){
        this.subtitleHeader = Selector('h1').withText('Itecor test platform')
        this.UserName = Selector('#username')
        this.password = Selector('#password')
        this.submitLink=Selector('button.submit-btn');
        this.genevatLink=Selector('#img_geneva_office');
           }
   
}
export default new HomePage();