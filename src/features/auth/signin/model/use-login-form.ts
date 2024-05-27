import {
  setCredentials,
  useLazyDataQuery,
  useLoginMutation,
} from "@/entities/auth";
import { DTOAuthDtoLogin } from "@/shared/api/generated";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const initvalue: DTOAuthDtoLogin = {
  userName: "",
  password: "",
};

export const useLoginForm = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [getData, { data, isLoading: getDataLoading }] = useLazyDataQuery();
  const { handleSubmit, ...form } = useForm({
    defaultValues: initvalue,
  });

  const handleLogin = async (data: DTOAuthDtoLogin) => {
    const res = await login(data);
    if (res.data) {
      dispatch(setCredentials(res.data));
    }
  };

  return {
    handleSubmit: handleSubmit(handleLogin),
    fetchStudents: getData,
    form: form,
    isLoginLoading: isLoading,
    isGetStudentsLoading: getDataLoading,
    dataStudents: data
  };
};
