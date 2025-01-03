import { Box, Divider, Grid, Rating, TextField } from '@mui/material';
import ReviewCard from '../../base/reviewCard/reviewCard';

const ReviewContainer = () => {
  return (
    <Grid
      container
      className="mx-auto p-4 border-[1px] rounded mb-6"
      maxWidth={'1200px'}
    >
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <Divider className="h-2" />
      <Grid item lg={12} className="">
        <p className="text-2xl font-bold my-2 font-main text-primary-main">
          Add a review
        </p>
        <Box className="flex gap-2 mb-6 ">
          <p className="capitalize text-secondary-main">you rating : </p>
          <Rating value={4} size="small" precision={0.5} />
        </Box>
        <Grid container spacing={2} className='pl-4 mb-6'>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="You name"
              placeholder="name"
              className="mb-4"
              name="name"
              defaultValue={''}
              required={true}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: (theme) => theme.palette.primary.light,
                  },
                  '&:hover fieldset': {
                    borderColor: (theme) => theme.palette.primary.main,
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              placeholder="Email"
              className="mb-4"
              name="email"
              defaultValue={''}
              required={true}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: (theme) => theme.palette.primary.light,
                  },
                  '&:hover fieldset': {
                    borderColor: (theme) => theme.palette.primary.main,
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Enter Your Comment"
              placeholder="Enter Your Comment"
              className="mb-4"
              name="reviewText"
              defaultValue={''}
              required={true}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: (theme) => theme.palette.primary.light,
                  },
                  '&:hover fieldset': {
                    borderColor: (theme) => theme.palette.primary.main,
                  },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReviewContainer;
