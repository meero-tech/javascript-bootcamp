let restaurant = {
    name : "PARMI",
    guestCapacity : 75,
    guestCount : 0,
    checkAvailability : function (partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        if(partySize<seatsLeft){
            console.log("Seats are available")
        }else{
            console.log("Seats are NOT available")
        }

    },
    seatParty  : function(coming){
        if(coming>this.guestCapacity){
            console.log("Seats are NOT available")
        }else{
            this.guestCapacity = this.guestCapacity-coming
            this.guestCount +=  coming
            console.log(`Our Guest Capacity is ${restaurant.guestCapacity}`)
            console.log(`The numbers of our guest is ${restaurant.guestCount}`)

        }   
    },
    removeParty : function(out){
        if(out>this.guestCapacity){
            console.log("JUMLAH ORANG YANG KELUAR SALAH")
        }else{
            this.guestCapacity = this.guestCapacity+out
            this.guestCount -=  out
            console.log(`Our Guest Capacity is ${restaurant.guestCapacity}`)
            console.log(`The numbers of our guest is ${restaurant.guestCount}`)

        }  

    }
}
restaurant.checkAvailability(8)
restaurant.seatParty(10)
restaurant.removeParty(10)
