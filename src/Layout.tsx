interface ILayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return <div className="layout-container">{children}</div>;
};
