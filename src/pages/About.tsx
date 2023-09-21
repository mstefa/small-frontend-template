import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Divider,
  Avatar,
} from '@nextui-org/react';

export function About() {
  return (
    <>
      <div className="container flex justify-center">
        <Card className="max-w-[600px] max-h-[400px]">
          <CardHeader className="flex gap-3">
            <Avatar
              isBordered
              radius="md"
              showFallback
              name="MS"
              src="https://drive.google.com/uc?export=download&id=1X1x_1WzLmBElR2t4g7lCrDNJ2OUjeTRm"
              classNames={{
                img: 'opacity-100',
              }}
            />
            <div className="flex flex-col">
              <p className="text-md">Matias Stefanutti</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="max-h-[300px]">
            <p>
              I&apos;ve developed this web application and am eager to discuss
              my approach, decisions, and potential enhancements in an upcoming
              interview.
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://www.linkedin.com/in/matiasstefanutti/"
              target="_blank"
            >
              Check my Linkedin profile
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
