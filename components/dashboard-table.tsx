import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";


export function DashboardTable() {

    const invoices = [
        {
            item: "1",
            screens: "start",
            screenView: "13",
            exits: "9",
            dropOff: "69%",
        },
        {
            item: "2",
            screens: "marketing-channels",
            screenView: "6",
            exits: "3",
            dropOff: "50%",
        },
        {
            item: "1",
            screens: "start",
            screenView: "13",
            exits: "9",
            dropOff: "69%",
        },
        {
            item: "2",
            screens: "marketing-channels",
            screenView: "6",
            exits: "3",
            dropOff: "50%",
        },
        {
            item: "1",
            screens: "start",
            screenView: "13",
            exits: "9",
            dropOff: "69%",
        },
        {
            item: "2",
            screens: "marketing-channels",
            screenView: "6",
            exits: "3",
            dropOff: "50%",
        },
        {
            item: "1",
            screens: "start",
            screenView: "13",
            exits: "9",
            dropOff: "69%",
        },
        {
            item: "2",
            screens: "marketing-channels",
            screenView: "6",
            exits: "3",
            dropOff: "50%",
        },
        {
            item: "1",
            screens: "start",
            screenView: "13",
            exits: "9",
            dropOff: "69%",
        },
        {
            item: "2",
            screens: "marketing-channels",
            screenView: "6",
            exits: "3",
            dropOff: "50%",
        },
        {
            item: "1",
            screens: "start",
            screenView: "13",
            exits: "9",
            dropOff: "69%",
        },
        {
            item: "2",
            screens: "marketing-channels",
            screenView: "6",
            exits: "3",
            dropOff: "50%",
        },
        {
            item: "1",
            screens: "start",
            screenView: "13",
            exits: "9",
            dropOff: "69%",
        },
        {
            item: "2",
            screens: "marketing-channels",
            screenView: "6",
            exits: "3",
            dropOff: "50%",
        },

    ]

    return (
        <Table className="p-12">
            <TableHeader>
                <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Screens</TableHead>
                    <TableHead>Screen views</TableHead>
                    <TableHead>Exits</TableHead>
                    <TableHead>Drop-off rate</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.item}>
                        <TableCell >{invoice.item}</TableCell>
                        <TableCell>{invoice.screens}</TableCell>
                        <TableCell>{invoice.screenView}</TableCell>
                        <TableCell >{invoice.exits}</TableCell>
                        <TableCell>{invoice.dropOff}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
