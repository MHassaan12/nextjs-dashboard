import { ConnectCard } from '@/components/connect-card';
import { DashboardTable } from '@/components/dashboard-table';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { Overview } from '@/components/overview';
import { RecentSales } from '@/components/recent-sales';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

export default function page() {
    return (
        <ScrollArea className="h-full">
            <div className="flex space-y-4 flex-col justify-center items-center gap-8 mt-10">
                <div className="relative w-[50%]">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        className="w-full py-2 pl-10 pr-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search integations"
                    />
                </div>
                <div className='w-[50%] flex flex-col gap-6'>

                    <ConnectCard src='https://cdn-icons-png.flaticon.com/512/646/646094.png' title='Email' description='Recive an email every time a user submit their answer' active={true} connect={false} />
                    <ConnectCard src='https://cdn-icons-png.flaticon.com/512/2504/2504768.png' title='Google Sheets' description='Send your data straight to Google Sheets. Automatically syncs as results come in.' active={false} connect={true} />
                    <ConnectCard src='https://cdn-icons-png.flaticon.com/512/16509/16509278.png' title='Excel' description='Send your typeform responses to Excel Online. Turn feekback into graphs, support quriess into workflows, and much more.' active={false} connect={true} />
                </div>
            </div>
        </ScrollArea>
    );
}
