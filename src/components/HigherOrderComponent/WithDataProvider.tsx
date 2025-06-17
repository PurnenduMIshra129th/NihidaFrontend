import { DataProvider } from "../../contexts/context/data/DataContext";

export function withDataProvider<P extends object>(
    Component: React.ComponentType<P>, 
    endpoint: string =''
) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const WrappedComponent = (props: P) => (
        <DataProvider endpoint={endpoint}>
            <Component {...props} />
        </DataProvider>
    );
    
    return WrappedComponent;
}