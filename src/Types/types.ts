// MARK: - Dish
export interface IDish {
     id: number
     name:string 
     image:string 
     category:string 
     label: string
     price:string
     description: string
     comments: IComment[]

    // enum CodingKeys: String, CodingKey {
    //     case id, name, image, category, label, price
    //     case dishDescription = "description"
    //     case comments
    // }
}

// MARK: - Comment
export interface IComment {
    id:number 
    rating: number
    comment:string
    author: string
    date: string
}

export interface IReservation {
    name:string
    phone:number
    numberOfPeople:number
    smoking:boolean
    dateTime?:number
    specialRequest:string
    
}