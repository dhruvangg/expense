import * as React from "react"
import { isToday, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from "@/components/ui"

interface DatePickerProps {
  selected?: Date | undefined;
  onSelect?: (date: Date) => void
}

export const DatePicker: React.FC<DatePickerProps> = ({ selected, onSelect }) => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState<boolean>(false)
  const label = selected && (isToday(selected) ? "Today" : format(selected, "do, MMM")) || ''

  const handleSelect = (date: Date): void => {
    onSelect?.(date);
    setIsPopoverOpen(false);
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !selected && "text-muted-foreground"
          )}
        >
          {selected && isToday(selected) ? <CalendarIcon /> : ''}
          {selected ? label : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={`w-auto p-0`}>
        <Calendar
          mode="single"
          selected={selected}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
