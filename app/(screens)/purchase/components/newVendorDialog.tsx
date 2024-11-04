"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addVendor } from "../../../redux/slices/vendorSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from "@/app/redux/store";

export function NewVendorDialog({
  showDialog,
  setShowDialog,
}: {
  showDialog: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const urlRef = useRef<HTMLInputElement>(null);
  const vendorNameRef = useRef<HTMLInputElement>(null);
  const [isSubmitted, setSubmitted] = useState(false);
  const vendorSlice = useSelector((state: IRootState) => state.vendors);

  const submitHandler = () => {
    if (vendorNameRef.current?.value && urlRef.current?.value) {
      dispatch(
        addVendor({
          name: String(vendorNameRef.current?.value),
          url: String(urlRef.current?.value),
          description: "Sample description",
        }),
      );
      setSubmitted(true);
    }
  };

  useEffect(() => {
    if (isSubmitted && !vendorSlice.isLoading) {
      setShowDialog(false);
    }
  }, [isSubmitted, setShowDialog, vendorSlice.isLoading]);

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              ref={vendorNameRef}
              id="name"
              placeholder="Versace"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="url" className="text-right">
              Website
            </Label>
            <Input
              id="url"
              ref={urlRef}
              className="col-span-3"
              inputMode="url"
              placeholder="https://versace.com"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => submitHandler()}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
