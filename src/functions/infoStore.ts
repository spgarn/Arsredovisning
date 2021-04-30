import { action, makeObservable, observable } from "mobx";
import { Company } from "./interfaces";



class infoStoreClass {

    company:Company = {company_info:{name:''}} as Company
    file_text:string;
    isReady:boolean;

    constructor(){
        makeObservable(this,{
            company: observable,
            file_text: observable,
            isReady:observable,
            readFile: action,
            getCompanyInfo: action,
            load: action
        })
    }

    load(file){
        this.readFile(file)
        this.getCompanyInfo()
    }

   readFile(file){

            var legacy = require('legacy-encoding');
            const reader = new FileReader()
            reader.readAsArrayBuffer(file)

            reader.onload = function () {
                infoStore.file_text = legacy.decode(Buffer.from(reader.result as ArrayBuffer), 'cp437');
            }
          
    }
    // Get everything between "" and index 1
    // const word = text.match(/"(.*)"/)[1]

    // create array with substring of every space. Skip first two indexes. Then join on spaces again to not have all spaces in substrings.
    // const [,, ...accountNameWords] = word.split(' ')
    //   accountNames.push(
    //     accountNameWords.join(' ').match(/"(.*)"/)[1]
    //   )

   getCompanyInfo(){
        const rows = this.file_text.split("#")
        const result = rows.map(r => r.startsWith("FNAMN") ? r : undefined)
        const filtered_result = result.filter(k => k !== undefined)
        const nameWords = filtered_result[0].split(' ')
        const name = nameWords.join(' ').match(/"(.*)"/)[1]
        this.company.company_info.name = name

        this.isReady = true
    }
    

    getAccountInfo(){
      
          const konto_number = []
          const konto_names = []
          const names = []
          let rest = []

          const rows = this.file_text.split("#")
      
          const result_report = rows.map(r => r.startsWith("RES 0") ? r : undefined)
          const filtered_result_report = result_report.filter(k => k !== undefined)
      
          filtered_result_report.map(r => konto_number.push(r[6] + r[7] + r[8] + r[9]))
      
          rows.map(data => konto_number.some(k => k == data[6] + data[7] + data[8] + data[9] ? data.includes('KONTO') && konto_names.push(data) : false))
      
      
      
          konto_names.map(word => {
            const [, , ...last] = word.split(' ')
            rest.push(last.join(' '))
          }
          )
      
}



   


}

export const infoStore = new infoStoreClass();