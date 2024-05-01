import { useEffect, useState } from "react";
import { DeviceMotion, DeviceMotionMeasurement } from "expo-sensors";
import { Subscription } from 'expo-modules-core';

export default function useAccelerometer(interval: number = 1000) {
    const [data, setData] = useState<DeviceMotionMeasurement>();
    const [subscription, setSubscription] = useState<Subscription | null>(null);

    useEffect(() => {
        DeviceMotion.setUpdateInterval(interval);
        setSubscription(DeviceMotion.addListener(setData));
        return () => {
            subscription && subscription.remove();
            setSubscription(null);
        }
    }, []);

    return data?.acceleration || {x: 0, y: 0, z: 0};
};
