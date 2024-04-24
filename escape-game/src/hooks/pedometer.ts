import { Pedometer } from "expo-sensors";
import { Subscription } from 'expo-modules-core';
import { useEffect, useState } from "react";
import { PedometerResult } from "expo-sensors/build/Pedometer";


export default function usePedometer() {
    const [data, setData] = useState<PedometerResult>();
    const [subscription, setSubscription] = useState<Subscription | null>(null);

    useEffect(() => {
        setSubscription(Pedometer.watchStepCount(result => {
            setData(result);
        }));
        return () => {
            subscription && subscription.remove();
            setSubscription(null);
        }
    }, []);

    return data?.steps || 0;
}