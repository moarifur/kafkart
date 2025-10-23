import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const HomePage = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Welcome to KafKart</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>This is a sample component using ShadCN UI</p>
                    <Button>Click Me</Button>
                </CardContent>
            </Card>
        </>
    );
};

export default HomePage;