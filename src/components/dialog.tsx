"use client"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { auth, db } from "./functionsAndOther/firebaseConfig";
import { setDoc, doc } from "firebase/firestore"
import { useRouter } from "next/navigation";
//@ts-ignore
export default function DialogComponent(props) {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [phnNum, setPhnNum] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("")
  const router = useRouter()
  useEffect(()=>{
    auth.onAuthStateChanged(user => {
      if (user) {
        //@ts-ignore
        setUser(user)
      } 
  });
  },[])

  //@ts-ignore
  const saveDataToDoc = async (user, Fnamee, Lnamee, phnNum) => {
    try {
      // Save user data to Firestore
      await setDoc(doc(db, "Customers", user.uid), {
        Fname: Fnamee,
        Lname: Lnamee,
        PhoneNum: phnNum,
        Email: user.email,
        UID: user.uid,
      }, { merge: true });
      
      // change the state or redirect to the map page.
      router.push('/map')
    } catch (error) {
      console.error("Error creating or updating customer document:", error);
    }
  };

  const handleClick =() => {
    if ( !Fname || !Lname || !phnNum) {
      alert("Please fill out all fields to save changes.");
    } else {
      saveDataToDoc(user,Fname,Lname,phnNum)
    }
  };

    return (
      <Dialog open={props.isOpen}>
        {/* <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger> */}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add missing information</DialogTitle>
            <DialogDescription>Add missing information to your profile here. Click save when you&apos;re done.</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" onChange={(e) => setFname(e.target.value)} placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" onChange={(e) => setLname(e.target.value)} placeholder="Robinson" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone-number">Phone number</Label>
              <Input id="phone-number" onChange={(e) => setPhnNum(e.target.value)} type="tel" />
            </div>
          <DialogFooter>
            <Button variant={'outline'} onClick={props.changeOpenCondition}>Cancel</Button>
            <Button type="submit" onClick={()=>{handleClick()}}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }