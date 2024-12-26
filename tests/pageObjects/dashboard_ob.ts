
export class dashBoard_ob {
   dashboardTitle: string;
   filterByDateButton: string;
   datePickerPopup: string;
   leftDateTable: string;
   rightDateTable: string;
   leftMonthTitle: string;
   rightMonthTitle: string;
   goToNextMonth: string;
   goToPreviousMonth: string;
   startTime: {
      hours: string;
      minutes: string;
      senconds: string;
      ampm: string;
   };
   endTime: {
      hours: string;
      minutes: string;
      senconds: string;
      ampm: string;
   };
   timeFilter: string;
   columnsFilter: string;
   columnsFilterRows: string;
   addFilterButton: string;
   usersButton: string;

   constructor() {
   //Dashboard title
   this.dashboardTitle = '//*[@id="__next"]/div/div/main/main/div/div[1]/div[2]/div[1]/div/h2'

   //Filter by date button
   this.filterByDateButton =  '(//*[@id="date"])[1]'

   //Date picker popup
   this.datePickerPopup = '/html/body/div[3]'

   //Start time
   this.startTime = {
      hours: '(//*[@id="12hours"])[1]',
      minutes: '(//*[@id="minutes"])[1]',
      senconds: '(//*[@id="seconds"])[1]',
      ampm: '//*[@id="radix-:ro:"]/div[2]/div[1]/div/div[5]/div/button'
   }

   //End time
   this.endTime = {
      hours: '(//*[@id="12hours"])[2]',
      minutes: '(//*[@id="minutes"])[2]',
      senconds: '(//*[@id="seconds"])[2]',
      ampm: '//*[@id="radix-:ro:"]/div[2]/div[2]/div/div[5]/div/button'
   }

   //Left month title
   this.leftMonthTitle = '//div[@class="space-y-4 rdp-caption_start"]//div//div[1]'

   //Right month title
   this.rightMonthTitle = '//div[@class="space-y-4 rdp-caption_end"]//div//div[1]'

   //Go to previous month button
   this.goToPreviousMonth = 'Go to previous month';

   //Go to next month button
   this.goToNextMonth = 'Go to next month';

   //Left date table
   this.leftDateTable = '//*[@id="radix-:ro:"]/div[1]/div/div[1]/table/tbody'

   //Right date table
   this.rightDateTable = '//*[@id="radix-:ro:"]/div[1]/div/div[2]/table/tbody'

   //Time filter button
   this.timeFilter = '//*[@id="__next"]/div/div/main/main/div/div[2]/div/div[1]/button[2]'

   //Colums filter button
   this.columnsFilter = '//*[@id="__next"]/div/div/main/main/div/div[2]/div/div[2]/button';

   //Column filter rows
   this.columnsFilterRows = '//*[@id="radix-:rq:"]//table/tbody/tr'

   //Add filter button
   this.addFilterButton = '//*[@id="radix-:rq:"]/button'

   //Users left menu button
   this.usersButton = '//*[@id="__next"]/div/div/div/div[2]/div/div[2]/div[1]/ul/li[4]/a'

   }

   LAST_COLUMNFILTERROW_COLUMNNAME_BUTTON(){  
      return `${this.columnsFilterRows}[last()]//td[2]/button`
   }

   LAST_COLUMNFILTERROW_COMPARETYPE_BUTTON(){
      return this.columnsFilterRows + `[last()]/td[3]/button`
   }

   LAST_COLUMNFILTERROW_VALUE_BUTTON(){
      return this.columnsFilterRows + `[last()]/td[4]/button`
   }


   COLUMNFILTERROW_BUTTON(columnName : string, compareType : string, buttonName : string){
      const locator = `//*[@id="radix-:rq:"]//table/tbody/tr[.//td/button[normalize-space()='${columnName}'] and .//td/button[normalize-space()='${compareType}']]`
      
      if (buttonName == 'COLUMNNAME'){
         return `${locator}//td[2]/button`
      }
      else if (buttonName == 'COMPARETYPE'){
         return `${locator}//td[3]/button`
      }
      else if (buttonName == 'VALUE'){
         return `${locator}//td[4]/button`
      }
      else if (buttonName == 'REMOVE'){
         return `${locator}//td[5]/button`
      }
   }

   LEFTDATE(date : string){
      return `//div[@class="space-y-4 rdp-caption_start"]//table/tbody//tr[td/button[normalize-space()="${date}"]]//td/button[normalize-space()="${date}" and not(contains(@class, 'day-outside'))]`
   }

   RIGHTDATE(date : string){
      return `//div[@class="space-y-4 rdp-caption_end"]//table/tbody//tr[td/button[normalize-space()="${date}"]]//td/button[normalize-space()="${date}" and not(contains(@class, 'day-outside'))]`
   }

}
