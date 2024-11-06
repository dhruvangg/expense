import React, { useState } from "react";
import * as yup from "yup";
import { Plus } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    Input, Button,
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel,
    Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui"
import { useGetCategoryQuery } from "@/app/api";
import { Category } from "@/types";

const formSchema = yup.object({
    name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
    role: yup.string().required('Please select a role'),
})

type FormData = yup.InferType<typeof formSchema>

export const CategoryList: React.FC = () => {
    const [formData, setFormData] = useState<FormData | null>(null)
    // const { register, handleSubmit, formState: { errors } } = useForm<Category>({ resolver: yupResolver(categorySchema) });
    const form = useForm<FormData>({
        resolver: yupResolver(formSchema),
        defaultValues: {
            name: "",
            role: "",
        },
    })
    function onSubmit(values: FormData) {
        console.log(values);

    }


    // const onSubmit: SubmitHandler<Category> = data => console.log(data)

    // const { data, error, isLoading } = useGetCategoryQuery();
    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>An error occurred</div>;
    // console.log(data);    

    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <Plus className="bg-gray-200 rounded-full h-10 w-10 p-1" />
                    <span className="text-xs font-medium">Add</span>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Category</DialogTitle>
                    </DialogHeader>
                    {formData && (
                        <div className="mt-8 p-4 bg-gray-100 rounded-md">
                            <h2 className="text-lg font-semibold mb-2">Submitted Data:</h2>
                            <pre>{JSON.stringify(formData, null, 2)}</pre>
                        </div>
                    )}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a role" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="admin">Admin</SelectItem>
                                                <SelectItem value="user">User</SelectItem>
                                                <SelectItem value="guest">Guest</SelectItem>
                                            </SelectContent>
                                        </Select>                                        
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <DialogFooter>
                                <Button type="submit">Submit</Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    )
}