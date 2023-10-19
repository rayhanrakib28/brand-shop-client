import { useEffect, useState } from "react";

const useGetDiscountData = () => {
    const [discountData, setDiscountData] = useState();
    useEffect(() => {
        fetch('/discounts.json')
            .then(res => res.json())
            .then(data => setDiscountData(data))
    }, [])
    return [discountData]
};
export default useGetDiscountData;