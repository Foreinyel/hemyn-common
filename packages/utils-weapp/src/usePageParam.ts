import { useRouter } from "@tarojs/taro";
import { qs2Obj } from "./taro";

const usePageParam = () => {
  const {
    params: { id, cid, scene }
  } = useRouter();

  const sceneData = scene ? qs2Obj(decodeURIComponent(scene)) : {};

  return {
    id: sceneData.id ? sceneData.id : id,
    cid: sceneData.cid ? sceneData.cid : cid
  };
};

export default usePageParam;
