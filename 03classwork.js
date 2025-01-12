// 實作簡單計算機功能，計算：
   // 1. 兩件商品的總價
   // 2. 折扣後的價格（八折）
   // 3. 平均價格
   let item1 = 199
   let item2 = 299

   let total = console.log(item1+item2)
   let discount = console.log((item1+item2)*0.8)
   let average = console.log((item1+item2)/2)


   // 將攝氏溫度轉換為華氏溫度
   // 公式：°F = °C × 9/5 + 32
   let celsius = 25
   let fahrenheit = console.log(celsius*9/5+32) 



  // 實作發票對獎程式
   // 特別獎號碼：12345678
   // 使用者發票號碼：後三碼為 678
   // 對中後三碼可得 200 元 
  // 特別獎號碼
const specialNumber = 12345678;

// 使用者發票號碼
const userNumber = 87654678;

// 獲取特別獎號碼的後三碼
const specialLastThree = specialNumber % 1000;

// 獲取使用者發票號碼的後三碼
const userLastThree = userNumber % 1000;

// 比對後三碼並給予獎金
if (userLastThree === specialLastThree) {
    console.log("恭喜你！你中獎了，獲得 200 元！");
} else {
    console.log("很遺憾，沒有中獎。");
}

// donee
