import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useGetCategoryQuery } from "@/app/api";
import { Plus } from "lucide-react";

export const Category: React.FC = () => {

    const { data, error, isLoading } = useGetCategoryQuery();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred</div>;
    console.log(data);

    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <Plus className="bg-gray-200 rounded-full h-10 w-10 p-1" />
                    <span className="text-xs font-medium">Add</span>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            <Input type="email" placeholder="Email" />
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}