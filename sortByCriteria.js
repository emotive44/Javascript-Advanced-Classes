////////////////////// Create a array from Tickets and sort them by criteria /////////////////
class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = +price;
        this.status = status;
    }
    static sortMethod(tickets, criteria) {      //// sort by criteria
        if(criteria === 'price') {
            return [...tickets]
                .sort((a, b) => b[criteria] - a[criteria]);
        }
        return [...tickets]
            .sort((a, b) => (a[criteria]).localeCompare(b[criteria]));
    }
}

function solve(input, criteria) {
    let arrayofTickets;
    let sortedArrayOfTickets;

    arrayofTickets = input.map(x => {           //// create a array from tickets
        return new Ticket(...x.split('|'));
    });

    sortedArrayOfTickets = Ticket.sortMethod(arrayofTickets, criteria);
    return sortedArrayOfTickets;
}

console.log(solve(['Philadelphia|94.20|available',
        'New York|97|sold',
        'Boston|16.21|departed',
        'Alaska|95.99|available'
    ], 
    'price'
));
