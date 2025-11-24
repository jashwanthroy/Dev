//Custom Hook (utility Function or Normal js function)
const useRestroMenu = (resId) =>{
    const [resInfo,setResInfo] = useState(null);
    useEffect(() =>{
        fetchData()
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.42485235372867&lng=78.64480845630169&restaurantId=931955&catalog_qa=undefined&submitAction=ENTER" + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    return resInfo;
}
export default useRestroMenu;