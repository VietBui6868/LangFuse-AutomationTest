import { Page } from "@playwright/test";
import { dashBoard_ob } from "../pageObjects/dashboard_ob";
import { lib } from "../lib/lib";
import { common } from "../lib/common";

const dashboardLocators = new dashBoard_ob();

export const dashboardActions = {
    async navigateToDashboardPage(page : Page, url : string){
        await lib.navigateTo(page, url);
    },

    async validateDashboardPageDisplay(page : Page, url : string){
        await lib.waitingForPageLoaded(page);
        await lib.validateElementVisible(page, dashboardLocators.dashboardTitle);
    },

    async openTimeFilter(page : Page){
        await lib.click(page, dashboardLocators.timeFilter);
    },

    async selectTimeFilterOption(page : Page, option : string){
        await lib.click(page, dashboardLocators.timeFilter);
        await lib.selectOption(page, option);
    },

    async validateTimeFilterOptionSelected(page : Page, option : string){
        await lib.validateElementText(page, dashboardLocators.timeFilter, option);
    },

    async openColumnsFilter(page : Page){
        await lib.click(page, dashboardLocators.columnsFilter);
    },

    async clickAddFilterButton(page : Page){
        await lib.click(page, dashboardLocators.addFilterButton);
    },

    async addNewColumnsFilter(page : Page, columnName: string, compareType : string, value : string){
        //Select column name
        await lib.click(page, dashboardLocators.LAST_COLUMNFILTERROW_COLUMNNAME_BUTTON());
        await lib.selectOption(page, columnName);
        
        //Select compare type
        await lib.click(page, dashboardLocators.LAST_COLUMNFILTERROW_COMPARETYPE_BUTTON());
        await lib.selectOption(page, compareType);
        
        //Fill value
        await lib.click(page, dashboardLocators.LAST_COLUMNFILTERROW_VALUE_BUTTON());
        await lib.selectOption(page, value);
    },

    async removeColumnsFilter(page : Page, columnName: string, compareType : string){
        //Click remove button
        const columnFilterRowField = dashboardLocators.COLUMNFILTERROW_BUTTON!(columnName, compareType, 'REMOVE');

        if (columnFilterRowField) {
            await lib.click(page, columnFilterRowField);
        } else {
            throw new Error(`COLUMNFILTERROW_FIELD returned undefined for columnName: ${columnName}, compareType: ${compareType}`);
        }
    },

    async openDateRangeTableFilter(page : Page){
        await lib.click(page, dashboardLocators.filterByDateButton);
    },

    async selectStartTime(page : Page, hours : string, minutes : string, seconds : string, ampm : 'AM' | 'PM'){
        await lib.Type(page, dashboardLocators.startTime.hours, hours);
        await lib.Type(page, dashboardLocators.startTime.minutes, minutes);
        await lib.Type(page, dashboardLocators.startTime.senconds, seconds);
        await lib.click(page, dashboardLocators.startTime.ampm);
        await lib.selectOption(page, ampm);
    },

    async selectEndTime(page : Page, hours : string, minutes : string, seconds : string, ampm : 'AM' | 'PM'){
        await lib.Type(page, dashboardLocators.endTime.hours, hours);
        await lib.Type(page, dashboardLocators.endTime.minutes, minutes);
        await lib.Type(page, dashboardLocators.endTime.senconds, seconds);
        await lib.click(page, dashboardLocators.endTime.ampm);
        await lib.selectOption(page, ampm);
    },

    async selectStartDate(page : Page, date : string, month : string, year : string){
        const leftMonthTitleLocator = dashboardLocators.leftMonthTitle;
        const expectedMonthYear = `${month} ${year}`;
        const dateExpectedMonthYear = new Date(expectedMonthYear);
        const currentMonthYear = new Date(await lib.elementTextContent(page, leftMonthTitleLocator));
        let currentMonthYearText = "";
        do{
            if(dateExpectedMonthYear > currentMonthYear)
            {
                //Click move to next month
                await lib.clickByLabel(page,dashboardLocators.goToNextMonth);
            }
            else{
                //Click move to previous month
                await lib.clickByLabel(page,dashboardLocators.goToPreviousMonth);
            }
            currentMonthYearText = await lib.elementTextContent(page, leftMonthTitleLocator);
        }while(currentMonthYearText !== expectedMonthYear)
        await lib.click(page, dashboardLocators.LEFTDATE(date));
    },

    async selectEndDate(page : Page, date : string, month : string, year : string){
        const rightMonthTitleLocator = dashboardLocators.rightMonthTitle;
        const expectedMonthYear = `${month} ${year}`;
        const dateExpectedMonthYear = new Date(expectedMonthYear);
        const currentMonthYear = new Date(await lib.elementTextContent(page, rightMonthTitleLocator));
        let currentMonthYearText = "";
        do{
            if(dateExpectedMonthYear > currentMonthYear)
            {
                //Click move to next month
                await lib.clickByLabel(page,dashboardLocators.goToNextMonth);
            }
            else{
                //Click move to previous month
                await lib.clickByLabel(page,dashboardLocators.goToPreviousMonth);
            }
            currentMonthYearText = await lib.elementTextContent(page, rightMonthTitleLocator);
        }while(currentMonthYearText !== expectedMonthYear)
        await lib.click(page, dashboardLocators.RIGHTDATE(date));
    },

    async validateDateRangeSelected(page: Page, startTime: any, startDate : number, startMonth : string, startYear : string, endTime : any, endDate : number, endMonth : string, endYear: string){
        const startMoment = common.convertToCustomDate(startYear, startMonth, Number(startDate),startTime.hours, startTime.minutes, startTime.ampm);
        const endMoment = common.convertToCustomDate(endYear, endMonth, Number(endDate),endTime.hours, endTime.minutes, endTime.ampm);
        const expecteTitle = `${startMoment} - ${endMoment}`
        lib.validateElementText(page, dashboardLocators.filterByDateButton, expecteTitle);
    }
}