export function selectBook(book) {
  //selectBook jest ActionCreatorem i potrzeba by zwracał akcje,
  //obiekt z właściwościami
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
