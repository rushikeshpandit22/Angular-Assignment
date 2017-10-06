export interface userinformation {
            fname: String;
            lname: String;
            maritalstatus: String;
            gender: String;
            bloodgroup: String;
            dob: any;
            email: String;
            mobile: Number;
            adress: String;
            city: String;
            state: String;
            zipcode: Number;    

}

export interface userRegistration {
    email: string;
    password: string;
    confirmpassword?: string;
}  