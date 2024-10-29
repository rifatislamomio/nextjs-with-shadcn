"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SquarePlus } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../../components/ui/select";
import { NewVendorDialog } from "./components/newVendorDialog";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVendors } from "./slice/vendorSlice";
import { AppDispatch, IRootState } from "../redux/store";

const formSchema = z
  .object({
    emailAddress: z.string().email(),
    password: z.string().min(3),
    confirmPassword: z.string(),
    vendor: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type Vendor = {
  id: string;
  name: string;
  description: string;
  url: string;
};

export default function PurchaseForm() {
  const [showDialog, setShowDialog] = useState(false);
  const vendors = useSelector((state: IRootState) => state.vendors);
  const dispatch = useDispatch<AppDispatch>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    dispatch(fetchVendors());
  }, [dispatch]);

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <NewVendorDialog showDialog={showDialog} setShowDialog={setShowDialog} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex w-full max-w-md flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className="flex w-full flex-row justify-between">
            <FormField
              control={form.control}
              name="vendor"
              render={({ field }) => {
                return (
                  <FormItem className="w-full pr-2">
                    <FormLabel>Vendor</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Vendor" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {!vendors.isLoading &&
                          vendors.data &&
                          vendors.data.map((vendor: Vendor) => (
                            <SelectItem
                              value={vendor.name}
                              key={vendor.id}
                              className="pl-8"
                            >
                              {String(vendor.name).toUpperCase()}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button
              title="Add new vendor"
              onClick={() => setShowDialog(true)}
              type="button"
              className="h-9 w-9 self-end bg-white p-1 text-black hover:bg-zinc-800 hover:text-white"
            >
              <SquarePlus className="text-inherit" />
            </Button>
          </div>

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Re-type Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}
