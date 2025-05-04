// Description:
//     You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:
//
//     products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
// amounts: [3, 24, 8]
// prices: [199, 299, 399]
// Return the three product names with the highest revenues (amount * price), in descending order (highest to lowest revenue).
//
// Note: if multiple products have the same revenue, order them according to their original positions in the input list.

// SOLUTION:

function top3(products, amounts, prices) {
    const amountPrice = amounts.map((el, i) => el * prices[i]);


    const combiObj = products.map((name, i) => ({
        name,
        price: amountPrice[i],
        index: i
    }));

    const sortedArr = combiObj.sort((a, b) => {
        if (b.price === a.price) {
            return a.index - b.index;
        }
        return b.price - a.price;
    });

    const sortedNames = sortedArr.map(item => item.name);

    return sortedNames.slice(0, 3);
}