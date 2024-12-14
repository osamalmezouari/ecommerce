import {
  Badge,
  Box,
  Rating,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from '@mui/material';
import { GrView } from 'react-icons/gr';
import { IoGitCompare, IoBagAdd, IoHeart } from 'react-icons/io5';
import { ProductCardType } from '../../../types/product';
import ProductDialog from '../productDialog/ProductDialog';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import {
  createshoppingCart,
  getshoppingCart,
} from '../../../features/shoppingCart/shoppingCartThunk';
import {
  createWishList,
  getWishlist,
} from '../../../features/wishlist/wishlistThunk';
import { addCompareItem } from '../../../features/compare/compareSlice';

export default function ProductCard({
  id,
  discount,
  name,
  categoryName,
  description,
  productAvgRaiting,
  price,
  priceWithDiscount,
  imageLink,
  unit,
}: ProductCardType) {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector(
    (state: RootState) => state.shoppingCart.createshoppingCart
  );
  const { loading: loadingWishlist } = useSelector(
    (state: RootState) => state.wishlist.createWishList
  );
  const [open, setOpen] = useState(false);
  const [dialogData, setDialogData] = useState<ProductCardType | {}>();

  const handleOpen = (data: ProductCardType) => {
    setOpen(!open);
    setDialogData(open ? {} : { ...data });
  };

  const addProducttoshoppingCart = async () => {
    dispatch(createshoppingCart({ productId: id, quantity: 1 }));
    dispatch(getshoppingCart());
  };

  return (
    <Card
      sx={{
        maxWidth: 280,
        borderRadius: '2px',
        border: '2px solid #eeeeee',
        margin: 'auto',
        height: '400px',
      }}
      className="group relative overflow-hidden"
    >
      <CardMedia
        sx={{ height: 240 }}
        className="bg-cover bg-center border-b-2 relative group-hover:scale-105 transition-transform duration-300"
        image={imageLink}
        title={name}
      >
        {discount > 0 && (
          <div className="absolute top-2 right-4">
            <Badge className="bg-red-400 text-white rounded-sm px-2 uppercase text-[12px]">
              - {discount} %
            </Badge>
          </div>
        )}
        <div className="absolute top-2 left-4">
          <Badge className="bg-primary-main text-white rounded-sm px-2 uppercase text-[12px]">
            1 {unit}
          </Badge>
        </div>
      </CardMedia>

      <Box className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 w-7/12 flex h-max top-[240px] group-hover:top-[190px] hover:z-10 items-center mx-auto justify-between bg-slate-100 p-2 rounded-xl">
        <Box
          component={'div'}
          className="border-2 p-1 text-secondary-main hover:bg-primary-main hover:text-white cursor-pointer rounded transition-all duration-300 hover:border-transparent"
        >
          {loading ? (
            <CircularProgress size={8} className="h-max" color="primary" />
          ) : (
            <IoBagAdd
              fontSize={16}
              onClick={() => addProducttoshoppingCart()}
            />
          )}
        </Box>
        <div
          className="border-2 p-1 text-secondary-main hover:bg-primary-main hover:text-white cursor-pointer rounded transition-all duration-300 hover:border-transparent"
          onClick={() =>
            handleOpen({
              id,
              discount,
              name,
              categoryName,
              description,
              productAvgRaiting,
              price,
              priceWithDiscount,
              imageLink,
              unit,
            })
          }
        >
          <GrView fontSize={16} />
        </div>
        <Box
          component={'div'}
          onClick={() => dispatch(addCompareItem(id))}
          className="border-2 p-1 text-secondary-main hover:bg-primary-main hover:text-white cursor-pointer rounded transition-all duration-300 hover:border-transparent"
        >
          <IoGitCompare fontSize={16} />
        </Box>
        <Box
          component={'div'}
          className="border-2 p-1 text-secondary-main hover:bg-primary-main hover:text-white cursor-pointer rounded transition-all duration-300 hover:border-transparent"
        >
          {loadingWishlist ? (
            <CircularProgress size={8} className="h-max" color="primary" />
          ) : (
            <IoHeart
              fontSize={16}
              onClick={async () => {
                await dispatch(createWishList(id));
                await dispatch(getWishlist());
              }}
            />
          )}
        </Box>
      </Box>

      <CardContent sx={{ padding: '5px 10px' }}>
        <p className="my-1 text-secondary-lighter capitalize">
          {categoryName} - {name}
        </p>
        <p className="text-secondary-main capitalize mb-3 max-h-6 overflow-hidden text-[14px] hover:text-primary-main cursor-pointer transition-colors duration-500">
          {description} ...
        </p>
        <Rating
          name="half-rating"
          size="small"
          defaultValue={productAvgRaiting}
          precision={0.5}
        />
        <Box className="flex gap-8 text-secondary-main">
          {priceWithDiscount && priceWithDiscount > 0 ? (
            <>
              <p className="text-secondary-main font-bold">
                ${priceWithDiscount}
              </p>
              <p className="line-through">${price}</p>
            </>
          ) : (
            <p className="text-secondary-main font-bold">${price}</p>
          )}
        </Box>
      </CardContent>

      {open && (
        <ProductDialog
          open={open}
          setopen={setOpen}
          {...(dialogData as ProductCardType)}
        />
      )}
    </Card>
  );
}
