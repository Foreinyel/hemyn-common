import { useRouter } from "@tarojs/taro";
import { qs2Obj } from "./taro";
var usePageParam = function () {
    var _a = useRouter().params, id = _a.id, cid = _a.cid, scene = _a.scene;
    var sceneData = scene ? qs2Obj(decodeURIComponent(scene)) : {};
    return {
        id: sceneData.id ? sceneData.id : id,
        cid: sceneData.cid ? sceneData.cid : cid
    };
};
export default usePageParam;
