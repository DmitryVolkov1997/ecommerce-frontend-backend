import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react"
import {IProduct} from "types"
import {FC} from "react"
import {Link} from "react-router-dom"

export const ProductBreadcrumbs: FC<{ product: IProduct }> = ({product}) => {
    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <Link className='hover:underline' to="/">
                    Home
                </Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink>
                    {product.name}
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}














