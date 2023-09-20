declare type ApiResponse<T> = {
  statusCode?: string;
  message?: string;
  content?: T;
};


export default ApiResponse