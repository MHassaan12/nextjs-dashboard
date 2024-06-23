import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

export function ConnectCard({ src, title, active, description, connect }: { src: string, title: string, active: boolean, description: string, connect: boolean }) {
    return (
        <Card className=" flex justify-between items-center gap-12">
            <div className="flex justify-center items-center py-4">
                <CardHeader>
                    <CardTitle>
                        <Image
                            src={src}
                            width={80}
                            height={50}
                            alt="avatar"
                        />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div>
                        <div className="flex gap-4">
                            <span className="text-lg">{title}</span>
                            {active && <Badge variant={'success'} className="gap-1 ">Active <Check /></Badge>}
                        </div>
                        <div>
                            <p>{description}</p>
                        </div>
                    </div>
                </CardContent>
            </div>
            <CardFooter>
                {connect && <Button>
                    Connect
                </Button>}
            </CardFooter>
        </Card>
    )
}