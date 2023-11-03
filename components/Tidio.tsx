import { Head } from '$fresh/runtime.ts';

export interface Props {
  code: string;
}

export default function Tidio({ code }: Props) {
  return <Head>
    <script src={`//code.tidio.co/${code}.js`} async></script>
  </Head>;
}