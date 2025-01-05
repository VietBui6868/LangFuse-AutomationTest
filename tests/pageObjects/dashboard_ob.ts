
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
   this.dashboardTitle = '//h2[normalize-space()="Dashboard"]'

   //Filter by date button
   this.filterByDateButton =  '//div[@data-sentry-component="DatePickerWithRange"]/button[@data-sentry-source-file="date-picker.tsx"]'

   //Date picker popup
   this.datePickerPopup = '//div[@data-sentry-source-file="date-picker.tsx" and @data-sentry-element="PopoverContent"]'

   //Start time
   this.startTime = {
      hours: '//*[normalize-space()="Start time"]/ancestor::div[@class="px-3"]/descendant::input[@id="12hours"]',
      minutes: '//*[normalize-space()="Start time"]/ancestor::div[@class="px-3"]/descendant::input[@id="minutes"]',
      senconds: '//*[normalize-space()="Start time"]/ancestor::div[@class="px-3"]/descendant::input[@id="seconds"]',
      ampm: '//*[normalize-space()="Start time"]/ancestor::div[@class="px-3"]/descendant::button[@role="combobox"]'
   }

   //End time
   this.endTime = {
      hours: '//*[normalize-space()="End time"]/ancestor::div[@class="px-3"]/descendant::input[@id="12hours"]',
      minutes: '//*[normalize-space()="End time"]/ancestor::div[@class="px-3"]/descendant::input[@id="minutes"]',
      senconds: '//*[normalize-space()="End time"]/ancestor::div[@class="px-3"]/descendant::input[@id="seconds"]',
      ampm: '//*[normalize-space()="End time"]/ancestor::div[@class="px-3"]/descendant::button[@role="combobox"]'
   }

   //Left month title
   this.leftMonthTitle = '//div[@id="react-day-picker-1"]'

   //Right month title
   this.rightMonthTitle = '//div[@id="react-day-picker-2"]'

   //Go to previous month button
   this.goToPreviousMonth = '//button[@aria-label="Go to previous month"]';

   //Go to next month button
   this.goToNextMonth = '//button[@aria-label="Go to next month"]';

   //Left date table
   this.leftDateTable = '//div[contains(@class,"rdp-caption_start")]/table/tbody'

   //Right date table
   this.rightDateTable = '//div[contains(@class,"rdp-caption_end")]/table/tbody'

   //Time filter button
   this.timeFilter = '//button[@data-sentry-source-file="date-range-dropdowns.tsx"]'

   //Colums filter button
   this.columnsFilter = '//button[@data-sentry-source-file="filter-builder.tsx"]'

   //Column filter rows
   this.columnsFilterRows = `//table[@class='table-auto']/tbody/tr`

   //Add filter button
   this.addFilterButton = '//button[normalize-space()="Add filter"]'

   //Users left menu button
   this.usersButton = '//*[@class="group/menu-item relative" and normalize-space()="Users"]'

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
      return this.leftDateTable + `/tr[td/button[normalize-space()="${date}"]]//td/button[normalize-space()="${date}" and not(contains(@class, 'day-outside'))]`
   }

   RIGHTDATE(date : string){
      return this.rightDateTable + `/tr[td/button[normalize-space()="${date}"]]//td/button[normalize-space()="${date}" and not(contains(@class, 'day-outside'))]`
   }

}
