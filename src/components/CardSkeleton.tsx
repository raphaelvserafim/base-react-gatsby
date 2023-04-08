import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function CardSkeleton(props: any) {

    const { loading = false, data = {} } = props;

    return (
        <Card sx={{ m: 2 }} >
            <CardHeader
                avatar={
                    loading ? (
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                    ) : (
                        <Avatar
                            alt={data.avatar}
                            src={data.avatar}
                        />
                    )
                }
                action={
                    loading ? null : (
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    )
                }
                title={
                    loading ? (
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    ) : (data.author)
                }
                subheader={
                    loading ? (
                        <Skeleton animation="wave" height={10} width="40%" />
                    ) : (data.dateTime)
                }
            />
            {loading ? (
                <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
            ) : (
                <CardMedia
                    component="img"
                    height="140"
                    image={data.coverImage}
                    alt={data.title}
                />
            )}

            <CardContent>
                {loading ? (
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="50%" />
                    </React.Fragment>
                ) : (
                    <>
                        <Typography variant="body2" color="text.secondary" component="p">
                            {data.title}
                        </Typography>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        </Stack>
                    </>
                )}
            </CardContent>
        </Card>
    );
}


CardSkeleton.propTypes = {
    loading: PropTypes.bool,
};


export default CardSkeleton;