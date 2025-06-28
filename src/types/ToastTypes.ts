export type ToastType = {
    title?: string,
    message: string,
    type: "error" | "info",
}

export type ToastTypeContext = {
    toast: ToastType | null,
    change: (toast: ToastType) => void;
}