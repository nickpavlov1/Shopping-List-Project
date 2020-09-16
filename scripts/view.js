import {
    shoppingList,
    CONTAINER,
    templateHtml
} from './common.js'

export const showShoppingList = () => {
    $(CONTAINER).empty();
    shoppingList.forEach(templateHtml);
}
