const greet = function(guest, stars) {
  return `${guest}, welcome to ${stars}-star ${this.name}!`;
};

const hotel = { name: 'Resort Hotel' };
const motel = { name: 'Sunlight Motel' };

console.log(greet.call(hotel, 'Mango', 5));
// "Mango, wellcome to 5-star Resort Hotel!"

console.log(greet.call(motel, 'Poly', 4));
// "Poly, wellcome to 4-star Sunlight Motel!"
