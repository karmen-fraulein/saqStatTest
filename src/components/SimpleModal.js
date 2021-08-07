import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 18) - 10;
}

function getModalStyle() {
  const top = 51 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 247,
    height: 552,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: "scroll",
    outline: "none",
  },
}));

export default function SimpleModal({open, setOpen}) {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h4 id="simple-modal-title">როგორ მუშაობს ფასების კალეიდოსკოპი</h4>
      <p>
        ფასების კალეიდოსკოპი წარმოადგენს დიაგრამას, რომელიც ასახავს ინფლაციის
        მაჩვენებელს საქონლისა და მომსახურების ჯგუფების და ქვეჯგუფების მიხედვით
        („დანიშნულების მიხედვით ინდივიდუალური მოხმარების კლასიფიკაციის“,
        COICOP-ის შესაბამისად), ასევე მათ წონებს სამომხმარებლო კალათაში.
      </p>
      <p>ფასების კალეიდოსკოპის გამოყენებით შესაძლებელია:</p>
      <ul>
        <li>
          საქონლისა და მომსახურების სხვადასხვა ქვეჯგუფზე ფასების ცვლილების
          მაჩვენებლის შედარება;
        </li>
        <li>
          ინფლაციის მაჩვენებლის ფორმირებაში საქონლისა და მომსახურების ცალკეული
          ქვეჯგუფების შედარებითი მნიშვნელობის - სამომხმარებლო კალათაში მათი
          წონების შედარება.
        </li>
      </ul>
      <h5>გამოყენების ინსტრუქცია</h5>
      <ol>
        <li>აირჩიეთ დროითი პერიოდი</li>
        <p>
          აირჩიეთ სასურველი წელი და თვე, რა პერიოდისთვისაც გსურთ ინფლაციის
          მაჩვენებლის გაანალიზება.
        </p>
        <li>მიუთითეთ საბაზო პერიოდი</li>
        <p>
          მიუთითეთ ორი საბაზო პერიოდიდან ერთ-ერთი (ინლაციის მაჩვენებელი წინა
          თვესთან ან წინა წლის შესაბამის თვესთან შედარებით).
        </p>
        <li>მიღებული შედეგების ინტერპრეტაცია</li>
        <p>
          დიაგრამის თოთოეული სეგმენტი ასახავს საქონლისა და მომსახურების
          კონკრეტული ქვეჯგუფის წონას სამომხმარებლო კალათაში და ამ ქვეჯგუფზე
          ფასების პროცენტულ ცვლილებას მითითებულ საბაზო პერიოდთან შედარებით.
          სეგმენტზე კურსორის მიტანის დროს ჩნდება შესაბამისი ქვეჯგუფის შესახებ
          შემდეგი ინფორმაცია:
        </p>
        <ul>
          <li>ქვეჯგუფის დასახელება</li>
          <li>ქვეჯგუფზე ფასების ცვლილების პროცენტული მაჩვენებელი</li>
          <li>ქვეჯგუფის წონა სამომხმარებლო კალათაში.</li>
        </ul>
      </ol>
      <p>
        სეგმენტის ფართობი ასახავს შესაბამისი ქვეჯგუფის წონას სამომხმარებლო
        კალათაში. რაც დიდია მოცემული სექტორის ფართობი, მით უფრო დიდია შესაბამისი
        ქვეჯგუფის მნიშნვნელობა ინფლაციის მაჩვენებლის ფორმირების პროცესში.
        სეგმენტების ფერადი ინდიკაცია ასახავს შესაბამის ქვეჯგუფზე ფასების
        ცვლილების ოდენობას, დიაგრამის ქვემოთ მოცემული სკალის შესაბამისად.
      </p>

      <SimpleModal />
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
