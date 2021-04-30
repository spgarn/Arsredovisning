import { dataStore } from './dataStore'

export function readFile(data, setText) {
  var legacy = require('legacy-encoding');
  const reader = new FileReader()
  reader.readAsArrayBuffer(data)
  reader.onload = function () {

    const konto_number = []
    const konto_names = []
    const names = []
    let rest = []



    const buffer = legacy.decode(Buffer.from(reader.result as ArrayBuffer), 'cp437');
    const divide = buffer.split("#")

    const result_report = divide.map(r => r.startsWith("RES 0") ? r : undefined)
    const filtered_result_report = result_report.filter(k => k !== undefined)

    filtered_result_report.map(r => konto_number.push(r[6] + r[7] + r[8] + r[9]))

    divide.map(data => konto_number.some(k => k == data[6] + data[7] + data[8] + data[9] ? data.includes('KONTO') && konto_names.push(data) : false))



    konto_names.map(word => {
      const [, , ...last] = word.split(' ')
      rest.push(last.join(' '))
    }
    )

    console.log(konto_names)

    setText(filtered_result_report)
  }
}